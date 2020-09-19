#lang racket

(define (negate p) (lambda (x) (not (p x))))

(define (reject p l))