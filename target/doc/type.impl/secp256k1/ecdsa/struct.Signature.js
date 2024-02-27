(function() {var type_impls = {
"secp256k1":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#50-196\">source</a><a href=\"#impl-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_der\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#53-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.from_der\" class=\"fn\">from_der</a>(data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a>, <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Converts a DER-encoded byte slice to a signature</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_compact\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#73-91\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.from_compact\" class=\"fn\">from_compact</a>(data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a>, <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Converts a 64-byte compact-encoded byte slice to a signature</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_der_lax\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#97-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.from_der_lax\" class=\"fn\">from_der_lax</a>(data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a>, <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Converts a “lax DER”-encoded byte slice to a signature. This is basically\nonly useful for validating signatures in the Bitcoin blockchain from before\n2016. It should never be used in new applications. This library does not\nsupport serializing to this “format”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize_s\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#133-143\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.normalize_s\" class=\"fn\">normalize_s</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Normalizes a signature to a “low S” form. In ECDSA, signatures are\nof the form (r, s) where r and s are numbers lying in some finite\nfield. The verification equation will pass for (r, s) iff it passes\nfor (r, -s), so it is possible to ``modify’’ signatures in transit\nby flipping the sign of s. This does not constitute a forgery since\nthe signed message still cannot be changed, but for some applications,\nchanging even the signature itself can be a problem. Such applications\nrequire a “strong signature”. It is believed that ECDSA is a strong\nsignature except for this ambiguity in the sign of s, so to accommodate\nthese applications libsecp256k1 will only accept signatures for which\ns is in the lower half of the field range. This eliminates the\nambiguity.</p>\n<p>However, for some systems, signatures with high s-values are considered\nvalid. (For example, parsing the historic Bitcoin blockchain requires\nthis.) For these applications we provide this normalization function,\nwhich ensures that the s value lies in the lower half of its range.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#147-149\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"struct\" href=\"secp256k1_sys/struct.Signature.html\" title=\"struct secp256k1_sys::Signature\">Signature</a></h4></section></summary><div class=\"docblock\"><p>Obtains a raw pointer suitable for use with FFI functions</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#153-155\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.as_mut_ptr\" class=\"fn\">as_mut_ptr</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"struct\" href=\"secp256k1_sys/struct.Signature.html\" title=\"struct secp256k1_sys::Signature\">Signature</a></h4></section></summary><div class=\"docblock\"><p>Obtains a raw mutable pointer suitable for use with FFI functions</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_der\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#159-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.serialize_der\" class=\"fn\">serialize_der</a>(&amp;self) -&gt; <a class=\"struct\" href=\"secp256k1/ecdsa/serialized_signature/struct.SerializedSignature.html\" title=\"struct secp256k1::ecdsa::serialized_signature::SerializedSignature\">SerializedSignature</a></h4></section></summary><div class=\"docblock\"><p>Serializes the signature in DER format</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_compact\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#176-187\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.serialize_compact\" class=\"fn\">serialize_compact</a>(&amp;self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">64</a>]</h4></section></summary><div class=\"docblock\"><p>Serializes the signature in compact format</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#193-195\">source</a><h4 class=\"code-header\">pub fn <a href=\"secp256k1/ecdsa/struct.Signature.html#tymethod.verify\" class=\"fn\">verify</a>(&amp;self, msg: &amp;<a class=\"struct\" href=\"secp256k1/struct.Message.html\" title=\"struct secp256k1::Message\">Message</a>, pk: &amp;<a class=\"struct\" href=\"secp256k1/struct.PublicKey.html\" title=\"struct secp256k1::PublicKey\">PublicKey</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Verifies an ECDSA signature for <code>msg</code> using <code>pk</code> and the global <a href=\"secp256k1/global/static.SECP256K1.html\" title=\"static secp256k1::global::SECP256K1\"><code>SECP256K1</code></a> context.</p>\n</div></details></div></details>",0,"secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#26-30\">source</a><a href=\"#impl-Debug-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#27-29\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-Hash-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-PartialEq-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#39-48\">source</a><a href=\"#impl-FromStr-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a></h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#41-47\">source</a><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a>, <a class=\"enum\" href=\"secp256k1/enum.Error.html\" title=\"enum secp256k1::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#32-37\">source</a><a href=\"#impl-Display-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#33-36\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","secp256k1::Signature"],["<section id=\"impl-StructuralPartialEq-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-StructuralPartialEq-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section>","StructuralPartialEq","secp256k1::Signature"],["<section id=\"impl-StructuralEq-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-StructuralEq-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section>","StructuralEq","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CSignature%3E-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#211-216\">source</a><a href=\"#impl-From%3CSignature%3E-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"secp256k1_sys/struct.Signature.html\" title=\"struct secp256k1_sys::Signature\">Signature</a>&gt; for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"docblock\"><p>Creates a new signature from a FFI signature</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#213-215\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(sig: <a class=\"struct\" href=\"secp256k1_sys/struct.Signature.html\" title=\"struct secp256k1_sys::Signature\">Signature</a>) -&gt; <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Signature>","secp256k1::Signature"],["<section id=\"impl-Eq-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-Eq-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section>","Eq","secp256k1::Signature"],["<section id=\"impl-Copy-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-Copy-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section>","Copy","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#impl-Clone-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#23\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","secp256k1::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CPtr-for-Signature\" class=\"impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#198-208\">source</a><a href=\"#impl-CPtr-for-Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"secp256k1_sys/trait.CPtr.html\" title=\"trait secp256k1_sys::CPtr\">CPtr</a> for <a class=\"struct\" href=\"secp256k1/ecdsa/struct.Signature.html\" title=\"struct secp256k1::ecdsa::Signature\">Signature</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"secp256k1_sys/trait.CPtr.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"secp256k1_sys/struct.Signature.html\" title=\"struct secp256k1_sys::Signature\">Signature</a></h4></section><section id=\"method.as_c_ptr\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#201-203\">source</a><a href=\"#method.as_c_ptr\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"secp256k1_sys/trait.CPtr.html#tymethod.as_c_ptr\" class=\"fn\">as_c_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a>Self::<a class=\"associatedtype\" href=\"secp256k1_sys/trait.CPtr.html#associatedtype.Target\" title=\"type secp256k1_sys::CPtr::Target\">Target</a></h4></section><section id=\"method.as_mut_c_ptr\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secp256k1/ecdsa/mod.rs.html#205-207\">source</a><a href=\"#method.as_mut_c_ptr\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"secp256k1_sys/trait.CPtr.html#tymethod.as_mut_c_ptr\" class=\"fn\">as_mut_c_ptr</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>Self::<a class=\"associatedtype\" href=\"secp256k1_sys/trait.CPtr.html#associatedtype.Target\" title=\"type secp256k1_sys::CPtr::Target\">Target</a></h4></section></div></details>","CPtr","secp256k1::Signature"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()