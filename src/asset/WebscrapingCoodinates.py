from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

# intiallize the City Dictionary
CityDict = {}
CityDict = dict()

CityList = []
CoordinateList = []

#run the program for every page
for i in range(0,5):
    if i == 0:
        canada_url = 'http://www.tageo.com/index-e-ca-cities-CA.htm'
    else:
        canada_url = 'http://www.tageo.com/index-e-ca-cities-CA-step-' + str(i) + '.htm'

    #opening up connection, grabbing the page
    uClient = uReq(canada_url)
    page_html = uClient.read()
    uClient.close()

    #html parsing
    page_soup = soup(page_html, "html.parser")
    containers = page_soup.findAll("tr", {"valign": "top"})

    #for loop for all containers in a page
    for container in containers:
        city = container.b
        tdData = container.findAll("td")
        Lat = tdData[3]
        Long = tdData[4]

        #Converts all the data into strings and extract the useful parts
        city  = str(city)[3:-4]
        Lat  = str(Lat)[4:-5]
        Long  = str(Long)[4:-5]

        #Add the information parsed into the City dictionary
        CityDict.update({city:(Lat,Long)})

        CityList.append(city)
        CoordinateList.append([Lat,Long])


print(CityDict)
print('A total of ' + str(len(CityDict)) + ' cities were scraped!')
print(CityList)
print(CoordinateList)