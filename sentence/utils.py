word = ""


def read_text():
    f = open("static/sentence.txt", "r")
    x = f.read()
    return x


def update_word(x):
    global word
    word = x


def insert_word():
    global word
    r = open("static/sentence.txt", "a")
    r.write(word)
    r.close()


def insert_space():
    space = "   "
    f = open("static/sentence.txt", "a")
    f.write(space)
    f.close()


def delete_word():
    sentence = read_text()
    newsentence = sentence[:-1] if word else word  # Ensure newWord is not None
    r = open("static/sentence.txt", "w")
    r.write(newsentence)
    r.close()
    return newsentence
