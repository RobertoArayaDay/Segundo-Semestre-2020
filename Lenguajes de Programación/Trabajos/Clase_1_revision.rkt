;ejercicios de Racket https://users.dcc.uchile.cl/~etanter/preplai/Elementos_B_sicos__.html#%28part._.Tipos_primitivos%29

#lang racket

(cond
  [(= 3 3) (printf "mama~n")]
  [(> 4 2) (printf "caca~n")])


;suma los argumentos
(define (sum x y)
  (+ x y))

;retorna de manera aleatoria uno de los argumentos
(define (pick-random x y)
  (if (> (random) 1/2)
      x
      y))
(printf "Se eligue un elemento random ~x ~n" (pick-random 5 3))

;retorna el mayor de los argumentos
(define (mayor x y)
  (if (> x y)
      x
      y))
(mayor 5 3)

;ESTRUCTURAS DE DATOS
;estructura mas básica 'par'
(define par (cons 1 2))

;el cabezal del par
(car par)

;el resto
(cdr par)

(define (pair-add1 p) 
  (cons (+ (car p) 1) (+ (cdr p) 1)))
(print (pair-add1 par))

(define (pick-random-vector v)
  )