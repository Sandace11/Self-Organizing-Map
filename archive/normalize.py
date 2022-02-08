import pandas as pd 
import scipy as sp
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import pandas as pd
dataframe = pd.read_csv('./sand.csv')
array = dataframe.values
scaler = MinMaxScaler(feature_range=(0, 1))

cleanDataSet = pd.DataFrame(scaler.fit_transform(dataframe))
cleanDataSet.to_csv('./sandNormalized.csv')
