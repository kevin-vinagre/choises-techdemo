CREATE SCHEMA IF NOT EXISTS choisestech;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_namespace n ON n.oid = t.typnamespace WHERE t.typname = 'estatus' AND n.nspname = 'choisestech') THEN
        CREATE TYPE choisestech.estatus AS ENUM ('ACTIVE','INACTIVE');
    END IF;
END$$;

CREATE TABLE choisestech.episodes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    first_chapter_id BIGINT,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status choisestech.estatus NOT NULL DEFAULT 'ACTIVE'
);

CREATE TABLE choisestech.chapters (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    episode_id BIGINT NOT NULL,
    video_url TEXT NOT NULL,
    description TEXT,
    question TEXT,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_chapter_episode
        FOREIGN KEY (episode_id)
        REFERENCES choisestech.episodes(id)
);

CREATE TABLE choisestech.answers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    chapter_id BIGINT NOT NULL,
    intent VARCHAR(100),
    keywords TEXT[],
    next_chapter_id BIGINT,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_answer_chapter
        FOREIGN KEY (chapter_id)
        REFERENCES choisestech.chapters(id),

    CONSTRAINT fk_answer_next_chapter
        FOREIGN KEY (next_chapter_id)
        REFERENCES choisestech.chapters(id)
);

ALTER TABLE choisestech.episodes
ADD CONSTRAINT fk_episode_first_chapter
FOREIGN KEY (first_chapter_id)
REFERENCES choisestech.chapters(id);