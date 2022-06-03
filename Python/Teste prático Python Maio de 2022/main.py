import requests
import xlsxwriter
import pandas as pd
from bs4 import BeautifulSoup
from datetime import datetime


def getLinks(URL, depth, fileName):
    lista_link = [[URL], [datetime.now().strftime("%d/%m/%Y %H:%M:%S")]]
    for cont in range(0, depth):
        lista_procura = [URL]
        print('troca nivel')
        for url in lista_procura:
            print('troca url')
            try:
                pg = requests.get(url)
                lista_procura.remove(url)
                soup = BeautifulSoup(pg.text, 'html.parser')
                partlinks = soup.find_all('a')
                for link in partlinks:
                    try:
                        if link.get('href') not in lista_link[0] and "http" in link.get('href'):
                            lista_link[0].append(link.get('href'))
                            lista_procura.append(link.get('href'))
                            hora = datetime.now()
                            lista_link[1].append(datetime.strftime(hora, "%d/%m/%Y %H:%M:%S"))
                    except TypeError:
                        continue
                print(lista_link)
            except Exception:
                continue
        cont += 1

    createDataSheet(lista_link, fileName)





def createDataSheet(content, fileName):
    df = pd.DataFrame({'Data': content[1], 'Link': content[0]})
    writer = pd.ExcelWriter(fileName+'.xlsx', engine='xlsxwriter')
    df.to_excel(writer, sheet_name='Sheet1', index=False)
    workbook = writer.book
    worksheet = writer.sheets['Sheet1']
    for i, col in enumerate(df.columns):
        column_len = df[col].astype(str).str.len().max()
        column_len = max(column_len, len(col)) + 2
        worksheet.set_column(i, i, column_len)
    writer.save()


getLinks("https://enttry.com.br/contato", 0, 'enttry')
