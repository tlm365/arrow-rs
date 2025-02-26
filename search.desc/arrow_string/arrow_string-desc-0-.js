searchState.loadedDescShard("arrow_string", 0, "Arrow string kernels\nProvide SQL’s CONTAINS, STARTS_WITH, ENDS_WITH operators …\nProvides utility functions for concatenation of elements …\nDefines kernel for length of string arrays and binary …\nProvide SQL’s LIKE operators for Arrow’s string arrays\nDefines kernel to extract substrings based on a regular …\nDefines kernel to extract a substring of an Array …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA binary based predicate\nThis is faster than <code>[u8]::ends_with</code> for small slices. See …\nEvaluate this predicate against the given haystack\nEvaluate this predicate against the elements of <code>array</code>\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis is faster than <code>[u8]::starts_with</code> for small slices. …\nReturns the elementwise concatenation of a …\nReturns the elementwise concatenation of a <code>GenericByteArray</code>…\nReturns the elementwise concatenation of <code>Array</code>s.\nReturns the elementwise concatenation of a …\nReturns the elementwise concatenation of <code>StringArray</code>.\nReturns an array of Int32/Int64 denoting the number of …\nReturns an array of Int32/Int64 denoting the length of …\nA trait for Arrow String Arrays, currently three types are …\nPerform SQL <code>CONTAINS(left, right)</code>\nPerform SQL <code>ENDSWITH(left, right)</code>\nReturns the argument unchanged.\nPerform SQL <code>left ILIKE right</code>\nCalls <code>U::from(self)</code>.\nReturns true if all data within this string array is ASCII\nConstructs a new iterator\nPerform SQL <code>left LIKE right</code>\nPerform SQL <code>left NOT ILIKE right</code>\nPerform SQL <code>left NOT LIKE right</code>\nPerform SQL <code>STARTSWITH(left, right)</code>\nEnds with ignoring ASCII case\nEquality ignoring ASCII case\nStarts with ignoring ASCII case\nA string based predicate\nThis is faster than <code>str::ends_with</code> for small strings. See …\nEvaluate this predicate against the given haystack\nEvaluate this predicate against the elements of <code>array</code>\nReturns the argument unchanged.\nCreate a predicate for the given ilike pattern\nCalls <code>U::from(self)</code>.\nCreate a predicate for the given like pattern\nTransforms a like <code>pattern</code> to a regex compatible pattern. …\nThis is faster than <code>str::starts_with</code> for small strings. …\nReturn BooleanArray indicating which strings in an array …\nReturn BooleanArray indicating which strings in an array …\nPerform SQL <code>array ~ regex_array</code> operation on <code>StringArray</code> / …\nPerform SQL <code>array ~ regex_array</code> operation on <code>StringArray</code> / …\nExtract all groups matched by a regular expression for a …\n<code>val</code> - string<code>start</code> - the start char index of the substring…\nReturns an <code>ArrayRef</code> with substrings of all the elements in …\nSubstrings based on character index")