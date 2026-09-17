-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "username" VARCHAR(160),
    "email" VARCHAR(160) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "status" "estatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
