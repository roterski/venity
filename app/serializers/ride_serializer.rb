class RideSerializer < ActiveModel::Serializer
  attributes :id, :car_id, :driver_id, :start_datetime, :end_datetime,
             :start_lng, :start_lat, :end_lng, :end_lat
end
