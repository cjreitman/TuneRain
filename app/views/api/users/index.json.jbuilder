json.array! @users do |user|

  json.extract! user, :username

end