Admin : U2FsdGVkX1/49DbRJBUxaNps8Sx31Gj4VYCvtzdFjVw=
pass@321# : U2FsdGVkX1+xdBvOAClLRJFldiQ5R/Nz0jFa14wRzuM=


    create or replace procedure PC_SessionToken
    (p_usr varchar2,p_token varchar2)
    is
      v_ssid int;
    begin
    select max(ssid) into v_ssid from t_user_session where usr = p_usr;
    if(v_ssid is null) then
    select nvl(max(ssid),0) + 1 into v_ssid from t_user_session where usr = p_usr;
    insert into t_user_session(ssid,usr,sstoken) values(v_ssid,p_usr,p_token);
   end if;
 end;


  create table t_user(
  usr varchar(50),
  pwd varchar(30),
  utp varchar(30),
  primary key(usr));

  create table t_user_session(
  ssid int,
  usr varchar(50),
  stdt date,
  endt date,
  sstoken varchar(200),	
  primary key(ssid));
