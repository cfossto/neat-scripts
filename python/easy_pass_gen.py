import random

def pass_gen(username_list):
    new_list = []
    for user in username_list:
        new_name = user + (str(int(random.random()*10000)))
        new_list.append(new_name)
    return new_list
