#lang play
(require "T1.rkt")
(require math/flonum)
(print-only-errors #t)

;;parte B)
;;tests para eval
(test (eval (simple 0)) 0)
(test (eval (compound 1 0 (compound 4 2 (simple 5)))) 1)
(test (eval (compound 1 2 (simple 4))) 1.5)
(test (eval (compound 3 4 (compound 0 4 (simple 2)))) 5)

;;parte C)
;;tests para degree
(test (degree (simple 0)) 0)
(test (degree (compound 1 3 (simple 3))) 1)
(test (degree (compound 3 4 (compound 0 4 (simple 2)))) 2)

;;parte D)
;;tests para fold
(test ((fold identity +)(compound 1 3 (simple 3))) 7)
(test ((fold identity max)(compound 3 4 (compound 0 6 (simple 2)))) 6)


;;parte E)
;;tests para eval2
(test (eval2 (simple 0)) 0)
(test (eval2 (compound 1 0 (compound 4 2 (simple 5)))) 1)
(test (eval2 (compound 1 2 (simple 4))) 1.5)
(test (eval2 (compound 3 4 (compound 0 4 (simple 2)))) 5)

;;tests para degree
(test (degree2 (simple 0)) 0)
(test (degree2 (compound 1 3 (simple 3))) 1)
(test (degree2 (compound 3 4 (compound 0 4 (simple 2)))) 2)


;;parte F)
;;tests para mysterious-cf
(test (mysterious-cf -1) "Error: argumento negativo")
(test (mysterious-cf 0) (simple 3))
(test (mysterious-cf 1) (compound 3 (expt 1 2) (simple 6)))
(test (mysterious-cf 2) (compound 3 (expt 1 2) (compound 6 (expt 3 2) (simple 6))))

;;parte G)
;;tests para from-to
(test (from-to 0 0) '(0))
(test (from-to 0 4) '(0 1 2 3 4))
(test (from-to 3 8) '(3 4 5 6 7 8))
(test (from-to 5 5) '(5))

;;tests para mysterious-list
(test (mysterious-list 0) '() )
(test (mysterious-list 1) '(3.0))
(test (mysterious-list 2) (list 3.0 (fl (+ 3 (/ 1 6)))))

;;parte H)
;;tests para rac-to-cf
(test (rac-to-cf (+ 3 (/ 49 200))) (compound 3 1 (compound 4 1 (compound 12 1 (simple 4)))))
(test (rac-to-cf 3) (simple 3))
(test (rac-to-cf (+ 24 (/ 1 6))) (compound 24 1 (simple 6)))