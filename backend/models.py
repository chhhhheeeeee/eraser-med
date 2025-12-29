from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict
from datetime import datetime, timezone
import uuid

class Translation(BaseModel):
    tr: str
    en: str

class PageContent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: Translation
    content: Translation
    meta_description: Optional[Translation] = None
    images: Optional[List[str]] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Product(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Translation
    description: Translation
    category: Translation
    image: str
    featured: bool = False
    details: Optional[Translation] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Solution(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: Translation
    description: Translation
    category: Translation
    image: str
    icon: str
    details: Optional[Translation] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: Translation
    excerpt: Translation
    content: Translation
    category: Translation
    image: str
    date: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class NewsItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: Translation
    excerpt: Translation
    content: Translation
    category: Translation
    image: str
    date: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Resource(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: Translation
    description: Optional[Translation] = None
    type: str  # video, document, link
    url: str
    thumbnail: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    type: str  # contact or quote
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SiteInfo(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    company_name: Translation
    tagline: Translation
    description: Translation
    contact: Dict
    social: Dict
    stats: List[Dict]
