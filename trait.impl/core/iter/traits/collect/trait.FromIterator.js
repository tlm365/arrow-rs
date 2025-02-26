(function() {
    var implementors = Object.fromEntries([["arrow_array",[["impl&lt;'a, Ptr, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt; + 'a,\n    T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;'a, Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt; + 'a,</div>"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.DictionaryArray.html\" title=\"struct arrow_array::array::DictionaryArray\">DictionaryArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.DictionaryArray.html\" title=\"struct arrow_array::array::DictionaryArray\">DictionaryArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.RunArray.html\" title=\"struct arrow_array::array::RunArray\">RunArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.RunArray.html\" title=\"struct arrow_array::array::RunArray\">RunArray</a>&lt;T&gt;"],["impl&lt;Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;,</div>"],["impl&lt;Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;,</div>"],["impl&lt;Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Ptr&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.BooleanArray.html\" title=\"struct arrow_array::array::BooleanArray\">BooleanArray</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>, Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"arrow_array/array/struct.NativeAdapter.html\" title=\"struct arrow_array::array::NativeAdapter\">NativeAdapter</a>&lt;T&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Ptr&gt; for <a class=\"struct\" href=\"arrow_array/array/struct.PrimitiveArray.html\" title=\"struct arrow_array::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;"]]],["arrow_buffer",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.BooleanBuffer.html\" title=\"struct arrow_buffer::buffer::BooleanBuffer\">BooleanBuffer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.Buffer.html\" title=\"struct arrow_buffer::buffer::Buffer\">Buffer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.MutableBuffer.html\" title=\"struct arrow_buffer::buffer::MutableBuffer\">MutableBuffer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.NullBuffer.html\" title=\"struct arrow_buffer::buffer::NullBuffer\">NullBuffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.Buffer.html\" title=\"struct arrow_buffer::buffer::Buffer\">Buffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.MutableBuffer.html\" title=\"struct arrow_buffer::buffer::MutableBuffer\">MutableBuffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/struct.ScalarBuffer.html\" title=\"struct arrow_buffer::buffer::ScalarBuffer\">ScalarBuffer</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/builder/struct.BufferBuilder.html\" title=\"struct arrow_buffer::builder::BufferBuilder\">BufferBuilder</a>&lt;T&gt;"]]],["arrow_schema",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow_schema/struct.Field.html\" title=\"struct arrow_schema::Field\">Field</a>&gt;)&gt; for <a class=\"struct\" href=\"arrow_schema/struct.UnionFields.html\" title=\"struct arrow_schema::UnionFields\">UnionFields</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"arrow_schema/ffi/struct.Flags.html\" title=\"struct arrow_schema::ffi::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"arrow_schema/ffi/struct.Flags.html\" title=\"struct arrow_schema::ffi::Flags\">Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"arrow_schema/struct.Field.html\" title=\"struct arrow_schema::Field\">Field</a>&gt; for <a class=\"struct\" href=\"arrow_schema/struct.Fields.html\" title=\"struct arrow_schema::Fields\">Fields</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow_schema/struct.Field.html\" title=\"struct arrow_schema::Field\">Field</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_schema/struct.Fields.html\" title=\"struct arrow_schema::Fields\">Fields</a>"]]],["parquet",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"parquet/arrow/arrow_reader/struct.RowSelector.html\" title=\"struct parquet::arrow::arrow_reader::RowSelector\">RowSelector</a>&gt; for <a class=\"struct\" href=\"parquet/arrow/arrow_reader/struct.RowSelection.html\" title=\"struct parquet::arrow::arrow_reader::RowSelection\">RowSelection</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[8848,3781,2117,533]}