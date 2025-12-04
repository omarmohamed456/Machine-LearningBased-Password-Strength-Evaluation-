import pandas as pd

df = pd.read_csv("rockyou_dataset.csv", usecols=['password'])

password_set = set(df['password'].astype(str))

def password_exists(password):

    return password in password_set

#test
print(password_exists("batman"))  
print(password_exists("me123456"))  
