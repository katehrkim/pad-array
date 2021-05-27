#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if len(array) < min_size:
        count = len(array)
        while count < min_size:
            array.append(value)
            count = count + 1
    return array
