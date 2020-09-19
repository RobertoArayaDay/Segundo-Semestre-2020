#lang play

; Auxiliar 2

; 1.a Definir my_map
;; my_map :: (A -> B) List[A] -> List[B]
;; Aplica map de manera manual a una lista l
(define (my_map f l)
  (match l
      ['() '()]
      [(cons a b) (cons (f a) (my_map f b))]
  ))

(define (sumar a)
  (+ a 1))
(define (multi5 a)
  (* a 5))


;Tests de my_map
(test (my_map sumar '(1 2 3 4)) '(2 3 4 5))
(test (my_map multi5 '(1 2 3 4)) '(5 10 15 20))


; 1.b  Definir my-filter
;; my_filter :: (A -> bool) List[A] -> List[A]
;; Aplica filter de manera manual a una lista
(define (my_filter f l)
  (if (empty? l)
      '()
      (if (f (car l))
          (cons (car l) (my_filter f (cdr l)))
          (my_filter f (cdr l)))))

(test (my_filter even? '(1 2 3 4)) '(2 4))


; 1.c Definir my-foldr
;; my-foldr :: (A A -> A) A List[A] -> A
;; foldr hecha a mano
(define (my-foldr f accum l)
  (match l
      [(cons a b) (f a (my-foldr f accum b))]
      ['() accum]
    ))

(test (my-foldr + 0 '(1 2 3 4 5)) 15)
(test (my-foldr cons '(a b c) '(0 1 2 3)) '(0 1 2 3 a b c))


; 2.a 
;; num->str:: List[Integers] -> List[Strings]
;; Transforma una lista de enteros a una de string
(define (num->str d_list)
  (match d_list
      [(cons a b) (cons (number->string a) (num->str b))]
      ['() '()]
    ))

(test (num->str '(1 2 3 4)) '("1" "2" "3" "4"))
(test (num->str '(512 3 1000)) '("512" "3" "1000"))


;2.b
;; sum_lista:: List[Number] -> Number
;; Entrega la sumatoria de los elementos de una lista numérica
(define (sum_lista d_list)
  (match d_list
      [(cons a b)(+ a (sum_lista b))]
      ['() 0]
    ))

(test (sum_lista '(1 2 3 4)) 10)
(test (sum_lista '(1000 23 1)) 1024)

;2.c
;; conc_lista:: List[String] -> String
;; Entrega la concatenación de los elementos de una lista de strings
(define (conc_lista d_lista)
  (match d_lista
          [(cons a b) (string-append a (conc_lista b))]
          ['() ""]))


(test (conc_lista '("hola" "como" "estas")) "holacomoestas")
(test (conc_lista '("ke " "pazAA" "oe!!")) "ke pazAAoe!!")


;2.d
;; numeric_lista:: List[A] -> List[Number]
;; Retorna una lista de todos los elementos numericos
(define (numeric_lista d_lista)
  (filter number? d_lista))

;2.e
;;
(define (sum_funcion l f)
  (foldr + 0 (map f l)))

;3.a
#|
(define (curry a f)
  (if (> a 0)
      ((lambda bb) (curry (- a 1) f))
      (curry (lambda bb (f b))))
      ()

  )
|#

;3.b Descurrificar
(define (uncurry-2 f)
  (lambda (a b) ((f a) b)))

;4.a
(define (sumatoria a f b)
  (if (> b a)
      (+ (f a) (sumatoria (+ a 1) f b))
      (f a)
   ))

(test (sumatoria 1 sumar 3) 9)
(test (sumatoria 4 multi5 8) 150)

;4.b
#|
<AB> ::= (hoja <val>)
      |  (nodo <value> <bt> <bt>)
|#

(deftype AB
  (hoja val)
  (nodo val bt bt))

(define (map-ab arbol)
  (match arbol
      [(nodo val bt bt) #t]
      [(hoja val)]))