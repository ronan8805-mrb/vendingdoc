create table if not exists machine_requests (
  id text primary key,
  business_name text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  members text not null default '',
  machines text not null default '',
  message text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists machine_requests_created_at_idx
  on machine_requests (created_at desc);
