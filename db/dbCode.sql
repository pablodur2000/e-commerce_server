-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.usuarios
(
    id integer NOT NULL,
    user_name character varying NOT NULL,
    password character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.compras
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    items_cart character varying[] NOT NULL,
    total_amount integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.productos
(
    id integer NOT NULL,
    category_id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    cost integer NOT NULL,
    currency character varying NOT NULL,
    img character varying[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.categorias
(
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    product_count character varying NOT NULL,
    img character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.comentarios
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    score integer NOT NULL,
    description character varying NOT NULL,
    "user" character varying NOT NULL,
    date character varying NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.compras
    ADD CONSTRAINT user_compra FOREIGN KEY (user_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.productos
    ADD CONSTRAINT prod_cat FOREIGN KEY (category_id)
    REFERENCES public.categorias (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.comentarios
    ADD CONSTRAINT comentarios_producto FOREIGN KEY (product_id)
    REFERENCES public.productos (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;