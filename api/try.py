from geopy.geocoders import Nominatim
from bot import indian_locations
def find_nearest_location(locations):
    #geolocator = Nominatim(user_agent="geoapiExercises")
    lists=[]
    geolocator = Nominatim(user_agent="my_geocoding_app",timeout=10)
    for location in locations:
        location_coordinates = geolocator.geocode(location)
        if location_coordinates is None:
            continue
        lists.append([location,location_coordinates.latitude, location_coordinates.longitude])
    return lists

    # Example dataset
def get_unique_values_from_dict(input_dict):
    unique_values = set(input_dict.values())
    return unique_values

# User input
#dataset=indian_locations.keys()
dataset=get_unique_values_from_dict(indian_locations)
#print(dataset)
nearest_location = find_nearest_location(dataset)
print(nearest_location)