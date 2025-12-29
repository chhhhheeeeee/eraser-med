from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from models import ContactSubmission

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'eraser_medikal')]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# Site Info Endpoint
@api_router.get("/content/site-info")
async def get_site_info():
    site_info = await db.site_info.find_one({}, {"_id": 0})
    if not site_info:
        return {
            "company_name": {"tr": "ERASER", "en": "ERASER"},
            "tagline": {"tr": "ALL IN SAFE", "en": "ALL IN SAFE"},
            "description": {
                "tr": "Eraser Medikal, 2007 yılında İzmir'de kurulmuş, kemoterapi ve TPN karışımları için medikal cihazlar üreten öncü bir firmadır.",
                "en": "Eraser Medical LLC was founded in 2007 in Izmir, a pioneer company producing medical devices for chemotherapy and TPN mixtures."
            },
            "contact": {
                "phone": "+90 232 479 80 60",
                "fax": "+90 232 479 80 25",
                "email": "info@eraser.com.tr",
                "address": "No:78 Pınarbaşı, Bornova, İzmir, Turkey"
            },
            "social": {
                "linkedin": "https://www.linkedin.com/company/eraser-medikal"
            },
            "stats": [
                {"number": "1700", "label": {"tr": "Metrekare Kapalı Alan", "en": "Square Meters Closed Area"}, "icon": "building"},
                {"number": "4", "label": {"tr": "Kıtaya İhracat", "en": "Export to Continents"}, "icon": "globe"},
                {"number": "15+", "label": {"tr": "Yıl Tecrübe", "en": "Years of Experience"}, "icon": "award"},
                {"number": "100+", "label": {"tr": "Ürün Çeşidi", "en": "Product Variety"}, "icon": "package"}
            ]
        }
    return site_info

# Pages Endpoints
@api_router.get("/content/pages/{slug}")
async def get_page_by_slug(slug: str):
    page = await db.pages.find_one({"slug": slug}, {"_id": 0})
    if not page:
        raise HTTPException(status_code=404, detail="Page not found")
    return page

@api_router.get("/content/pages")
async def get_all_pages():
    pages = await db.pages.find({}, {"_id": 0}).to_list(100)
    return pages

# Products Endpoints
@api_router.get("/products")
async def get_products(featured: Optional[bool] = None, category: Optional[str] = None):
    query = {}
    if featured is not None:
        query["featured"] = featured
    if category:
        query["category.tr"] = category
    
    products = await db.products.find(query, {"_id": 0}).to_list(100)
    return products

@api_router.get("/products/{product_id}")
async def get_product(product_id: str):
    product = await db.products.find_one({"id": product_id}, {"_id": 0})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# Solutions Endpoints
@api_router.get("/solutions")
async def get_solutions(category: Optional[str] = None):
    query = {}
    if category:
        query["category.tr"] = category
    
    solutions = await db.solutions.find(query, {"_id": 0}).to_list(100)
    return solutions

@api_router.get("/solutions/{solution_id}")
async def get_solution(solution_id: str):
    solution = await db.solutions.find_one({"id": solution_id}, {"_id": 0})
    if not solution:
        raise HTTPException(status_code=404, detail="Solution not found")
    return solution

# Blog Endpoints
@api_router.get("/blog")
async def get_blog_posts(category: Optional[str] = None):
    query = {}
    if category:
        query["category.tr"] = category
    
    posts = await db.blog_posts.find(query, {"_id": 0}).sort("date", -1).to_list(100)
    return posts

@api_router.get("/blog/{slug}")
async def get_blog_post(slug: str):
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

# News Endpoints
@api_router.get("/news")
async def get_news(category: Optional[str] = None):
    query = {}
    if category:
        query["category.tr"] = category
    
    news = await db.news.find(query, {"_id": 0}).sort("date", -1).to_list(100)
    return news

@api_router.get("/news/{slug}")
async def get_news_item(slug: str):
    news_item = await db.news.find_one({"slug": slug}, {"_id": 0})
    if not news_item:
        raise HTTPException(status_code=404, detail="News item not found")
    return news_item

# Resources Endpoint
@api_router.get("/resources")
async def get_resources(resource_type: Optional[str] = None):
    query = {}
    if resource_type:
        query["type"] = resource_type
    
    resources = await db.resources.find(query, {"_id": 0}).to_list(100)
    return resources

# Contact Submission
class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    type: str = "contact"

@api_router.post("/contact/submit")
async def submit_contact(submission: ContactSubmissionCreate):
    contact_obj = ContactSubmission(**submission.model_dump())
    
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_submissions.insert_one(doc)
    
    return {"message": "Mesajınız başarıyla alındı. En kısa sürede size dönüş yapacağız.", "success": True}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()