-- CreateTable
CREATE TABLE "Prompt" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "template" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prompt_title_key" ON "Prompt"("title");
