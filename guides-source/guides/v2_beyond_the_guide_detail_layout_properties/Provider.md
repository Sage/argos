#Detail Layouts: Provider
The `provider` property allows you to provide a custom mapping between the row and the SData entry. Normally it is a one to one mapping of the rows `property` value to the entry property e.g.:

```javascript
// row
{
   name: 'NameLF',
   property: 'NameLF',
   label: this.nameLFText,
}

// SData Entry
{
   Account: 'Tests Inc.',
   NameLF: 'McTest, Tester',
   Email: 'tester@tests.org'
}

// Resulting row value:
row.value = entry[row.property]
row.value = entry['NameLF']
row.value = 'McTest, Tester'
```

If the one-to-one mapping is not desired you may define a `provider` function that takes the SData entry and the `property` of the row and whatever it returns will be the value of the row. 

##Exercise 1: Provider
This exercise we will use the provider function to combine two properties into one row.

###Work it!
1\. If you've followed the Create a Simple... series, open `argos-template/src/Views/Account/Detail.js` and go to the `createLayout()` function.

2\. Add two new fields to the querySelect array: Type and SubType

```javascript
      querySelect: [
          'AccountName',
          'AccountManager/UserInfo/Username',
          'WebAddress',
          'MainPhone',
          'Industry',
          'Type',
          'SubType'
      ]
```

3\. Add a new row to Details section children array with the following properties:

```javascript
{
    name: 'CombinedType',
    property: 'CombinedType',
    label: this.combinedTypeText,
    provider: this.combineTypes
}
```

4\. Wait! We added a property that does not correspond to our data (querySelect), this is because when you provide a `provider()` function it will pass the SData entry to your function and let you figure out how to extract the property `CombinedType`.

5\. Define a new function (above createLayout) named `combineTypes`, for parameters you have `entry` and `property`. It should return a string that joins `entry['Type']` and `entry['SubType']` with ` > `.

```javascript
combineTypes: function(entry, property) {
   if (entry['Type'] && entry['SubType'])
       return string.substitute('${Type} > ${SubType}', entry);
   else
       return entry['Type'] || '';
},
```

6\. Add the localizable label string:

```javascript
combinedTypeText: 'type',
```

7\. Save and run your up and open an Detail for an entry. At type you should see something like: `Customer > Hardware`.
