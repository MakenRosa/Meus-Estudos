import metadata_parser


def getMetas(URL):
    with open('metatags.json', 'a+') as arquivo:
        pagina = metadata_parser.MetadataParser(URL)
        arquivo.write(str(pagina.metadata))


getMetas("https://enttry.com.br/contato")
