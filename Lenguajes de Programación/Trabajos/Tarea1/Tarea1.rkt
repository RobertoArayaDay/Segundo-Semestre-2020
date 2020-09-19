#lang play
(require math/flonum)

; a) [6 pt]
#|
<CFraction> ::= (simple <integer>)
             |  (compound <integer> <integer> <CFraction>)
|#
;;  Representación inductiva de fracciones continuas
(deftype CFraction
  (simple int)
  (compound int numerador denominador))


; B) [5 pt]
;; eval :: CFraction -> Rational
;; Evalúa una fracción continua y devuelve el número racional que representa.
(define (eval fraccion)
  (match fraccion
      [(compound a b c)(+ a (/ b (eval c)))]
      [(simple a) a]))

;tests para eval
(test (eval (compound 1 2 (simple 4))) 1.5)
(test (eval (compound 3 4 (compound 0 4 (simple 2)))) 5)


; C) [5 pt]
;; degree :: CFraction -> Integer
;;Recibe CFraction y devuelve el grado de una fracción continua
(define (degree fraccion)
  (match fraccion
      [(compound a b c)(+ 1 (degree c))]
      [(simple a) 0]))

;tests para degree
(test (degree (compound 1 3 (simple 3))) 1)
(test (degree (compound 3 4 (compound 0 4 (simple 2)))) 2)


; d) [8 pt]
;; fold :: (Integer -> A) (Integer Integer CFraction -> A) -> (CFraction -> A)
;; Captura el esquema de recursión asociado a CFraction 
(define (fold f g)
  (λ (bt)
    (match bt
      [(simple a) (f a)]
      [(compound a b c) (g a b ((fold f g) c))])))

;tests para fold
(test ((fold identity +)(compound 1 3 (simple 3))) 7)
(test ((fold identity max)(compound 3 4 (compound 0 6 (simple 2)))) 6)



; e) [8 pt]
;; eval :: CFraction -> Rational
(define (eval-fold fraccion)
  ((fold identity (lambda (a b c) (+ a (/ b c)))) fraccion))

;tests para eval
(test (eval-fold (compound 1 2 (simple 4))) 1.5)
(test (eval-fold (compound 3 4 (compound 0 4 (simple 2)))) 5)



;; degree-fold :: CFraction -> Integer
(define (degree-fold fraccion)
  ((fold (lambda (a) 0)(lambda (e b c) (+ 1 c))) fraccion))

;tests para degree-fold
(test (degree-fold (compound 1 3 (simple 3))) 1)
(test (degree-fold (compound 3 4 (compound 0 4 (simple 2)))) 2)


; f) [10 pt]
;; mysterious-cf :: Integer -> CFraction
;; Genera una secuencia de fracciones continuas
(define (mysterious-cf n [con 0])
  (cond
    [(< n 0) "Error: argumento negativo"]
    [(zero? n) (simple 3)]
    [(and (> n 0) (zero? con)) (compound 3 (expt 1 2) (mysterious-cf n (+ con 1)))]
    [(and (> n 0) (> con 0) (not (= con n))) (compound 6 (expt (+ (* con 2) 1) 2) (mysterious-cf n (+ con 1)))]
    [(and (> n 0) (= con n)) (simple 6)]))
  
;tests para mysterious-cf

(test (mysterious-cf -1) "Error: argumento negativo")
(test (mysterious-cf 0) (simple 3))
(test (mysterious-cf 1) (compound 3 (expt 1 2) (simple 6)))
(test (mysterious-cf 2) (compound 3 (expt 1 2) (compound 6 (expt 3 2) (simple 6))))


;g)[8 pt]
;; from-to :: Integer Integer -> List[Integer]
;; Retorna una lista de numeros naturales entre los valores entregados
(define (from-to a b)
  (if (= a b)
      (cons a empty)
      (cons a (from-to (+ a 1) b))))

; tests para from-to
(test (from-to 0 4) '(0 1 2 3 4))
(test (from-to 3 8) '(3 4 5 6 7 8))
(test (from-to 5 5) '(5))

;; mysterious-list :: Integer -> List[Float]
;; Devuelve la lista de los primeros n valores de la mysterious-cf
(define (mysterious-list n)
  (map fl (map eval (map mysterious-cf (from-to 0 n)))))

;tests para mysterious-list
(test (mysterious-list 0) '(3))
(test (mysterious-list 1) '(3 3.166))
(test (mysterious-list 2) '(3 3.166 3.133))


;h)[10 pt]
;; rac-to-cf :: Rational -> CFraction
;; Transforma un numero racional no-negativoen su representación en forma de fraccion continua

(define (rac-to-cf number)
  (if (integer? number)
      (simple number)
      (compound (floor number) 1 (rac-to-cf (/ 1 (- number (floor number)))))))

;tests para rac-to-cf
(test (rac-to-cf (+ 3 (/ 49 200))) (compound 3 1 (compound 4 1 (compound 12 1 (simple 4)))))
(test (rac-to-cf 3) (simple 3))
(test (rac-to-cf (+ 24 (/ 1 6))) (compound 24 1 (simple 6)))
