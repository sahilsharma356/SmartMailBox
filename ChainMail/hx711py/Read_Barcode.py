import os
import re
from subprocess import Popen, PIPE
import time
from pymongo import MongoClient
from pprint import pprint

#def call_barcode_reader():

def IF_barcode_exists(barcode):
    client = MongoClient("mongodb+srv://shly:ssyy7713@cluster0-jqcgs.mongodb.net/test?retryWrites=true&w=majority")
    mydb = client["SmartMailBoxData"]
    DeliveryGuy = mydb["OrderedItems"]
    
    Customer = mydb["Customer"]
    Delivered_item = { "barcode": barcode }
    customerquery = { "customer" : barcode}


    DeliveryGuyAccess = DeliveryGuy.find(Delivered_item)

    if DeliveryGuyAccess:
        return True
    else:
        CustomerAccess = Customer.find(Customer_query)
        if CustomerAccess:
            return True
        else:
            return False

def If_Barcode(output):
    pattern = re.compile(r"(CODE-128)|(EAN-13)|(EAN-8)|(EAN-2)|(EAN-5)|(UPC-A)|(UPC-E)|(ISBN-10)|(ISBN-13):[0-9]+")
    matches = re.match(pattern, output)
    if matches:
        return True
    else:
        return False

def excute_command(command):
        system = Popen(command, shell=True, stdout=PIPE, stderr=PIPE)
        system_info = system.communicate()
        if system_info[0]:
                stdout = system_info[0].strip('\n')
                return stdout
        if system_info[1]:
                stderr = system_info[1]
                return stderr

        return False


def get_Barcode():
    GetBarcode = "python barcodereader.py"
    timeout = time.time() + 60*1  # 5 minutes from now
    while True:
        system = Popen(GetBarcode, shell=True, stdout=PIPE, stderr=PIPE)
        system_info = system.communicate()
        output = system_info[0].strip('\n')
        if If_Barcode(output):
            Barcode = output
            return Barcode
            break;
        if time.time() > timeout:
            print('Failed to read barcode for 5 minutes')
            exit(1)


def call_barcode_reader():
        output = excute_command("uname -a")
        
        Barcode = get_Barcode()
        
        Barcode = Barcode.split(':')
        Barcode=Barcode[1]


        Result=IF_barcode_exists(Barcode.lstrip('0'))
        
        print(Result)
        return Barcode.lstrip('0')

            

    #iif __name__ == '__main__':
    #        Main()
