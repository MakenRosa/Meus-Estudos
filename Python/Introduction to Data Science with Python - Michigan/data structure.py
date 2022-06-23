import pandas as pd
import numpy as np
notas = {"Maken": 10, "Erick": 9.5, "Esther": 7, "Kika":8.5}
serie = pd.Series(notas, index=["Maken", "Erick", "Kika"])
print(serie)