import requests
import pandas as pd
import matplotlib.pyplot as plt

# ------------------------ Obtener datos ------------------------

url = "https://api.counterapi.dev/v2/gonzalo-iniestas-team-2252/feliz-navidad/stats"
response = requests.get(url)
data = response.json()["data"]["stats"]

# ------------------------ Resumen general ------------------------

today = data["today"]
week = data["this_week"]

plt.figure(figsize=(6,4))
plt.bar(["Hoy-Up", "Hoy-Down", "Semana-Up", "Semana-Down"], 
        [today["up"], today["down"], week["up"], week["down"]])
plt.title("Visitas Hoy vs Semana")
plt.ylabel("Cantidad")
plt.show()


# ------------------------ Actividad por horas ------------------------

hours = data["temporal"]["hours"]
df_hours = pd.DataFrame.from_dict(hours, orient="index")
df_hours.index = df_hours.index.astype(int)
df_hours = df_hours.sort_index()

plt.figure(figsize=(10,5))
plt.plot(df_hours.index, df_hours['up'], marker='o', label="Up")
plt.plot(df_hours.index, df_hours['down'], marker='o', label="Down")
plt.title("Actividad por Horas del Día")
plt.xlabel("Hora")
plt.ylabel("Visitas")
plt.legend()
plt.grid(True)
plt.show()


# ------------------------ Actividad por día de la semana ------------------------

weekdays = data["temporal"]["weekdays"]
df_week = pd.DataFrame.from_dict(weekdays, orient="index")

plt.figure(figsize=(8,4))
df_week[['up','down']].plot(kind='bar')
plt.title("Actividad por Día de la Semana")
plt.ylabel("Visitas")
plt.xticks(rotation=45)
plt.show()


# ------------------------ Actividad por Trimestre ------------------------

quarters = data["temporal"]["quarters"]
df_quarters = pd.DataFrame.from_dict(quarters, orient="index")

plt.figure(figsize=(6,4))
df_quarters[['up','down']].plot(kind='bar')
plt.title("Actividad por Trimestre")
plt.ylabel("Visitas")
plt.xticks(rotation=0)
plt.show()