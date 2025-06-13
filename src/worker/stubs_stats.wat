

(module
  (type $float (struct (field f64)))
  (type $float_array (array (mut f64)))
  (func (export "caml_unix_times")
    (param (ref eq)) (result (ref eq))
    (array.new_fixed $float_array 4
      (f64.const 4.2) (f64.const 4.2) (f64.const 4.2) (f64.const 4.2))))
