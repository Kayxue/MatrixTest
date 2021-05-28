from numpy import array
from PIL import Image

A = array([
    [1, 5, 3, 9],
    [2, 5, 1, 5],
    [1, 5, 3, 7],
    [3, 6, 2, 6]
])

B = array([
    [5, 2, 6, 2],
    [6, 2, 7, 2],
    [9, 3, 5, 7],
    [9, 3, 6, 2]
])

print(A+B)
print(A-B)
print(A.dot(B))

img = Image.fromarray(A.dot(B), "RGB")
img.save("PyTest.png")
