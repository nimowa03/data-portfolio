-- Minimal schema (extend as needed)
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  product_name TEXT,
  content TEXT,
  review_date DATE,
  rating NUMERIC,
  content_hash TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS review_analysis (
  id SERIAL PRIMARY KEY,
  review_id INT REFERENCES reviews(id),
  sentiment_label TEXT,
  sentiment_score NUMERIC,
  star_rating NUMERIC,
  keywords TEXT[],
  categories TEXT[],
  user_persona TEXT,
  improvement_suggestion TEXT,
  summary TEXT,
  analyzed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS review_sentence_analysis (
  id SERIAL PRIMARY KEY,
  review_id INT REFERENCES reviews(id),
  sent_index INT,
  sentence TEXT,
  sentiment_label TEXT,
  sentiment_score NUMERIC,
  keywords TEXT[],
  categories TEXT[],
  analyzed_at TIMESTAMP DEFAULT NOW()
);