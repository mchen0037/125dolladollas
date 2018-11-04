import datetime
import csv

def datetime_to_float(d):
    return d.timestamp()


# sample_input = '2017-12-28 22:15:00'
#
# hey = datetime.datetime.strptime(sample_input, "%Y-%m-%d %H:%M:%S")
new_file = open("new.csv", 'w')

with open('hw_chw_csv.csv') as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    counter = 0
    for row in csvReader:
        if counter == 0:
            for el in row:
                new_file.write(str(el) + ",")
            new_file.write("\n")
            counter = counter + 1
            continue
        else:
            dateTime = datetime.datetime.strptime(row[0], "%Y-%m-%d %H:%M:%S")
            row[0] = datetime_to_float(dateTime)
            for el in row:
                new_file.write(str(el) + ",")
            new_file.write("\n")
