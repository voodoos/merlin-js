(module
   (func (export "caml_thread_initialize")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_cleanup")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_self")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_id")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_new")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_join")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_yield")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_thread_uncaught_exception")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))

   (func (export "caml_set_current_thread_name")
      (param (ref eq)) (result (ref eq))
      (ref.i31 (i32.const 0)))
)
