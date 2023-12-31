from src.models.calendar_model import CalendarItem
from dotenv import load_dotenv
import os
# Import items

# Calendar Item Variable Copy:
    # title: str
    # start: str
    # end: str
    # allDay: bool
    # resource: str

# Load Secret Connection String
load_dotenv()
connection_string = os.getenv("ConnectionString")

# MongoDB Driver
import motor.motor_asyncio
client = motor.motor_asyncio.AsyncIOMotorClient(connection_string)

# Create Database & Collection
database = client.SAIO
collection = database.calendarItems


# Create a Calendar item
async def create_calendar_item(item):
    document = item
    result = await collection.insert_one(document)
    return document


# Read 1 Calendar item
async def read_one_calendar_item(title):
    document = await collection.find_one({"title":title})
    return document


# Read All Calendar items
async def read_all_calendar_items(email):
    calendar_items = []
    cursor = collection.find({"email": email})
    async for document in cursor:
        calendar_items.append(CalendarItem(**document))
    return calendar_items


# Update a Calendar item
async def update_calendar_item(item):
    document = item
    result = await collection.update_one(
        {"title":item['title']},
        {
            "$set": {
                "start": item['start'],
                "end": item['end'],
                "allDay": item['allDay'],
                "resource": item['resource'],
                "email": item['email']
            }
        },
        upsert=True
    )
    return document


# Patch a Calendar Item
async def patch_calendar_item(title, start, end, allDay, resource):
    await collection.update_one(
        {"title":title},
        {
            "$set": {
                "start": start,
                "end": end,
                "allDay": allDay,
                "resource": resource
            }
        },
        upsert=True
    )
    document = await collection.find_one({"title": title})
    return document

# Delete a Calendar item
async def remove_calendar_item(title):
    await collection.delete_one({"title": title})
    return True