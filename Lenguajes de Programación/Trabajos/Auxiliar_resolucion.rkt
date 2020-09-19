#lang racket
(define l2 (cons 1 (cons 2 (cons 3 4))))

;Una lista, con notación de pares, se representaría co
(list 1 2)
(cons 1 (cons 2 empty))
(equal? (list 1 2) (cons 1 (cons 2 empty)))

(list (list 1 2) 3)
(define l (list '(a b c) '(d e f) '(g h i)))

;acceder al elemento 'c y 'e
(caddar l)
(cadadr l)

;formar '(c), '(a,b), '((a b) (c))
(cons 'c empty)
(cons 'a (cons 'b empty))
(cons (cons 'a (cons 'b empty)) (cons (cons 'c empty) empty))

;2. definir pair-add1
(define (pair-add1 p)
  (cons (+ (car p) 1) (+ (cdr p) 1)))

;se verifica el buen funcionamiento
(equal? (pair-add1 (cons 1 2)) (cons 2 3))

;3.definir sums-coins, recibe 3 enteros de cantidad de 50, 100 y 500, retorna cantidad de plata
(define (sums-coins a b c)
  (+ (* a 50) (* b 100) (* c 500)))

(equal? (sums-coins 2 1 2) 1200)

;4.definir tax, recibe sueldo bruto y retorna impuesto a pagar
(define (tax a)
  (if (> a 750000)
      (* (/ a 100) 28)
      (if (> a 500000)
          (* (/ a 20) 3)
          0)))

(= (tax 1000000) 280000)

;5.definir netpay, recibe cantidad de horas y retorna sueldo liquido
(define (netpay a)
  (- (* a 5000) (tax (* a 5000))))

;6.definir quicksort
(define (quicksort lista)
  )