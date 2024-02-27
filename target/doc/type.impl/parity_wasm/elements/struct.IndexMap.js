(function() {var type_impls = {
"parity_wasm":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#30-179\">source</a><a href=\"#impl-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#33-35\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Create an empty <code>IndexMap</code>, preallocating enough space to store\n<code>capacity</code> entries without needing to reallocate the underlying memory.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#38-41\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Clear the map.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#44-49\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return the name for the specified index, if it exists.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains_key\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#52-57\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.contains_key\" class=\"fn\">contains_key</a>(&amp;self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Does the map contain an entry for the specified index?</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#64-93\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;mut self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, value: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Insert a name into our map, returning the existing value if present.</p>\n<p>Note: This API is designed for reasonably dense indices based on valid\ndata. Inserting a huge <code>idx</code> will use up a lot of RAM, and this function\nwill not try to protect you against that.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#96-107\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Remove an item if present and return it.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#110-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>The number of items in this map.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#117-119\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Is this map empty?</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#133-136\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; Iter&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Create a non-consuming iterator over this <code>IndexMap</code>’s keys and values.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_with\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#147-178\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.deserialize_with\" class=\"fn\">deserialize_with</a>&lt;R, F&gt;(\n    max_entry_space: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    deserialize_value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>,\n    rdr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;, <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a>&gt;<div class=\"where\">where\n    R: Read,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Custom deserialization routine.</p>\n<p>We will allocate an underlying array no larger than <code>max_entry_space</code> to\nhold the data, so the maximum index must be less than <code>max_entry_space</code>.\nThis prevents mallicious *.wasm files from having a single entry with\nthe index <code>u32::MAX</code>, which would consume far too much memory.</p>\n<p>The <code>deserialize_value</code> function will be passed the index of the value\nbeing deserialized, and must deserialize the value.</p>\n</div></details></div></details>",0,"parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#326-339\">source</a><a href=\"#impl-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"parity_wasm/elements/trait.Deserialize.html\" title=\"trait parity_wasm::elements::Deserialize\">Deserialize</a>,\n    <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;T as <a class=\"trait\" href=\"parity_wasm/elements/trait.Deserialize.html\" title=\"trait parity_wasm::elements::Deserialize\">Deserialize</a>&gt;::<a class=\"associatedtype\" href=\"parity_wasm/elements/trait.Deserialize.html#associatedtype.Error\" title=\"type parity_wasm::elements::Deserialize::Error\">Error</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#334-338\">source</a><h4 class=\"code-header\">pub fn <a href=\"parity_wasm/elements/struct.IndexMap.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;R: Read&gt;(\n    max_entry_space: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    rdr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Deserialize a map containing simple values that support <code>Deserialize</code>.\nWe will allocate an underlying array no larger than <code>max_entry_space</code> to\nhold the data, so the maximum index must be less than <code>max_entry_space</code>.</p>\n</div></details></div></details>",0,"parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#21\">source</a><a href=\"#impl-Debug-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#21\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#21\">source</a><a href=\"#impl-Default-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#21\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#187-199\">source</a><a href=\"#impl-PartialEq-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#188-198\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3C(u32,+T)%3E-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#203-221\">source</a><a href=\"#impl-FromIterator%3C(u32,+T)%3E-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, T)&gt; for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#209-220\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I&gt;(iter: I) -&gt; Self<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, T)&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Create an <code>IndexMap</code> from an iterator.</p>\n<p>Note: This API is designed for reasonably dense indices based on valid\ndata. Inserting a huge <code>idx</code> will use up a lot of RAM, and this function\nwill not try to protect you against that.</p>\n</div></details></div></details>","FromIterator<(u32, T)>","parity_wasm::elements::name_section::NameMap"],["<section id=\"impl-Eq-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#201\">source</a><a href=\"#impl-Eq-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section>","Eq","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#309-324\">source</a><a href=\"#impl-Serialize-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"parity_wasm/elements/trait.Serialize.html\" title=\"trait parity_wasm::elements::Serialize\">Serialize</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"parity_wasm/elements/trait.Serialize.html\" title=\"trait parity_wasm::elements::Serialize\">Serialize</a>,\n    <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;T as <a class=\"trait\" href=\"parity_wasm/elements/trait.Serialize.html\" title=\"trait parity_wasm::elements::Serialize\">Serialize</a>&gt;::<a class=\"associatedtype\" href=\"parity_wasm/elements/trait.Serialize.html#associatedtype.Error\" title=\"type parity_wasm::elements::Serialize::Error\">Error</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"parity_wasm/elements/trait.Serialize.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"parity_wasm/elements/enum.Error.html\" title=\"enum parity_wasm::elements::Error\">Error</a></h4></section></summary><div class='docblock'>Serialization error produced by serialization routine.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#316-323\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_wasm/elements/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;W: Write&gt;(self, wtr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut W</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Self::<a class=\"associatedtype\" href=\"parity_wasm/elements/trait.Serialize.html#associatedtype.Error\" title=\"type parity_wasm::elements::Serialize::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Serialize type to serial i/o</div></details></div></details>","Serialize","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#257-264\">source</a><a href=\"#impl-IntoIterator-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, T)</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = IntoIter&lt;T&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#261-263\">source</a><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; IntoIter&lt;T&gt;</h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","parity_wasm::elements::name_section::NameMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IndexMap%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#181-185\">source</a><a href=\"#impl-Clone-for-IndexMap%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_wasm/elements/index_map.rs.html#182-184\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"parity_wasm/elements/struct.IndexMap.html\" title=\"struct parity_wasm::elements::IndexMap\">IndexMap</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","parity_wasm::elements::name_section::NameMap"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()