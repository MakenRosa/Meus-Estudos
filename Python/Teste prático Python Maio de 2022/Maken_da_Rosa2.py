import pycep_correios
import requests


def getTemperatura():
    apiKey = "c495cf703f3f1f12e2c406c9368bfe60"  # API DO SITE OPEN WEATHER MAP
    cep = "88111671"
    cidade = pycep_correios.get_address_from_cep(cep)['cidade']
    site = f"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={apiKey}"
    request = requests.get(site)
    temperatura = request.json()['main']['temp'] - 273.15
    print(f"A temperatura atual é de {temperatura:.1f}ºC")


getTemperatura()
