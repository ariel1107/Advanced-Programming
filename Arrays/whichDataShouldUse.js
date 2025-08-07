/*
where datas come from 
1- From the program itself: Data written directly in source code (e.g status messages).
2- Data input from the user interface or data written in DOM (e. g tasks in todo app).
3- from external sources: data fetched for example from web API (e.g. recipe objects).

            collection of data
            Data structure:
If we just need a simple list of values, we have to use arrays or sets!
on the other hand, if we need key-value pair, then we use an object or maps. The big difference is that by using the key we have a way to describe the values

ARRAYS: 
1- Use when you need ordered list of values (might contain duplicates).
2- Use when you need to manipulate data.

SETS: 
1- Use when you need to work with unique values.
2- Use when high- performance is really important.
3- Use to remove duplicates from arrays.

------------------------------------------------

OBJECTS:
1- More "traditional" key/value store ("abused" objects)
2- Easier to write and access values with . and []
-Use when you need to include functions (methods)
-Use when working with JSON (can convert to map)

MAPS:
1- Better performance
2- Keys can have any data type
3- Easy to iterate
4- Easy to compute size.
- Use when you simply need to map key to values
- Use when you need keys that are not strings.