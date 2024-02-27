(function() {var implementors = {
"blake2":[["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sVarCore.html\" title=\"struct blake2::Blake2sVarCore\">Blake2sVarCore</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"blake2/struct.Blake2bVarCore.html\" title=\"struct blake2::Blake2bVarCore\">Blake2bVarCore</a>"]],
"digest":[],
"hmac":[["impl&lt;D&gt; <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"hmac/struct.HmacCore.html\" title=\"struct hmac::HmacCore\">HmacCore</a>&lt;D&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"digest/core_api/wrapper/trait.CoreProxy.html\" title=\"trait digest::core_api::wrapper::CoreProxy\">CoreProxy</a>,\n    D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a>: <a class=\"trait\" href=\"digest/digest/trait.HashMarker.html\" title=\"trait digest::digest::HashMarker\">HashMarker</a> + <a class=\"trait\" href=\"digest/core_api/trait.UpdateCore.html\" title=\"trait digest::core_api::UpdateCore\">UpdateCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.FixedOutputCore.html\" title=\"trait digest::core_api::FixedOutputCore\">FixedOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a>&lt;BufferKind = <a class=\"struct\" href=\"block_buffer/struct.Eager.html\" title=\"struct block_buffer::Eager\">Eager</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;&lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div>"]],
"sha2":[["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>"]],
"sha3":[["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_256Core.html\" title=\"struct sha3::Sha3_256Core\">Sha3_256Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak384Core.html\" title=\"struct sha3::Keccak384Core\">Keccak384Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake256Core.html\" title=\"struct sha3::TurboShake256Core\">TurboShake256Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak224Core.html\" title=\"struct sha3::Keccak224Core\">Keccak224Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake128Core.html\" title=\"struct sha3::CShake128Core\">CShake128Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_384Core.html\" title=\"struct sha3::Sha3_384Core\">Sha3_384Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake256Core.html\" title=\"struct sha3::CShake256Core\">CShake256Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_512Core.html\" title=\"struct sha3::Sha3_512Core\">Sha3_512Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake128Core.html\" title=\"struct sha3::Shake128Core\">Shake128Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake128Core.html\" title=\"struct sha3::TurboShake128Core\">TurboShake128Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256FullCore.html\" title=\"struct sha3::Keccak256FullCore\">Keccak256FullCore</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak512Core.html\" title=\"struct sha3::Keccak512Core\">Keccak512Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_224Core.html\" title=\"struct sha3::Sha3_224Core\">Sha3_224Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake256Core.html\" title=\"struct sha3::Shake256Core\">Shake256Core</a>"],["impl <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256Core.html\" title=\"struct sha3::Keccak256Core\">Keccak256Core</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()