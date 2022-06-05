import pandas as pd
import requests
from bs4 import BeautifulSoup
from datetime import datetime


# Só consegui fazer sem o parametro depth, sendo assim, só mostrará um nível
def getLinks(URL, fileName):
    lista_link = [[], []]
    pg = requests.get(URL)
    soup = BeautifulSoup(pg.text, 'html.parser')
    partlinks = soup.find_all('a')
    for link in partlinks:
        try:
            if "http" in link.get('href'):
                lista_link[0].append(link.get('href'))
                hora = datetime.now()
                lista_link[1].append(datetime.strftime(hora, "%d/%m/%Y %H:%M:%S"))
                print(link.get('href'))
                createDataSheet(lista_link, fileName)
        except Exception as ex:
            print(ex)
            continue


def createDataSheet(content, fileName):
    df = pd.DataFrame({'Data': content[1], 'Link': content[0]})
    writer = pd.ExcelWriter(fileName + '.xlsx', engine='xlsxwriter')
    df.to_excel(writer, sheet_name='Sheet1', index=False)
    worksheet = writer.sheets['Sheet1']
    for i, col in enumerate(df.columns):
        column_len = df[col].astype(str).str.len().max()
        column_len = max(column_len, len(col)) + 2
        worksheet.set_column(i, i, column_len)
    writer.save()


getLinks("https://enttry.com.br/contato", 'Enttry')
