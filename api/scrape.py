import requests
from bs4 import BeautifulSoup
import json
import re
import pandas as pd
import numpy as np
# get the data from the website
url = 'https://main.sci.gov.in/php/navigation/get_records.php'
response = requests.get(url)
html = response.text
soup = BeautifulSoup(html, 'html.parser')
# print(soup)
table = soup.find('table')
df = pd.read_html(str(table))
print(df[0]) # we had [3196 rows x 6 columns]

#counting null values
print(df[0].isna().sum())
# output 
#   0      0
#   1      0
#   2      0
#   3      0
#   4    463
#   5    601

#removing NaN values
df_final=df[0].dropna()
print(df_final)

#converting it to csv
df_final.to_csv('lawyers_list.csv', encoding='utf-8', index=False)
