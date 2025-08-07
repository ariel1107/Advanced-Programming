/* 

1.          To mutate the original array: These should usually be avoided

a)  to add elements to original array:
.push():            end
.unshift():         start

b)  to remove elements to riginal:
.pop():             end
.shift():           start
.splice(ini, cant)   any

c)  others:
.reverse()
.sort()
.fill()

 ---------------------------------------------------
2.            A new array based on original

a)  Same length as original:
.map()               loop the array

b)  filtered usind condition:
.filter()

c)  taking portion of original:
.slice()

d)    with one item replaced:
.with()

e)   flattened :
.flat()
.flatMap()

f)   reversed:
.toReversed()

g)  sorted:
.toSorted()

h)  with deleted item :
.toSpliced()

i)   join two arrays:
.concat()

--------------------------------------------

3.                 An array index

a) Based on value:
.indexOf

b) based on test condition:
.findIndex()
.findLastIndex()

----------------------------------------------

4.             To get an element of an array

a) Based on test condition:
.find()
.findLast()

b)  If we already know before hand what the index of the element is:
Based on the position:
.at()

-------------------------------------------------

5.                  know if array includes :

a)   Based on value:
.includes(condition based on equality)

b)   Based on test condition:
.some(value)
.every(value)

---------------------------------------------------

6.               convert array into string

a)   Based on separator
.join('')

---------------------------------------------------

7.                To transform to value

a)   Based on accumulator:
.reduce(acc, value, index, arr)

----------------------------------------------------

8.                 To just loop an array

a)based on callback (only loop the array without producing any new array):
.forEach()

----------------------------------------------------

9.          MORE ARRAY TOOLS AND TECHNIQUES:            

a)   Grouping an array by categories:

-Object.groupBy()

b)   Creating a new array from scratch:

-Array.from()

c) Creating a new array from scratch with n EMPTY positions (use together with .fill method)

-new Array(n)

d) joining 2 or more arrays:
[...arr1, ...arr2]

e) Creating a new array containing unique values from arr:
[... new Set(arr)]

f)  Creating a new array containing unique elements that are present in both arr1 and arr2:
[...new Set(arr1).intersection(new Set(arr2))]

-------------------------------------------------------
*/
