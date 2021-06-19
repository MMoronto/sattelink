# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create([
    {
        name: "Compact GNSS Active Patch Antenna",
        image_url: "https://sattelink.s3.amazonaws.com/Compact-GNSS-Active-Patch-Antenna.png",
        price: "$2,400"
    },
    {
        name: "Attitude actuators",
        image_url: "https://sattelink.s3.amazonaws.com/Attitude-actuators.png",
        price: "$6,300"
    },
    {
        name: "Attitude Sensors",
        image_url: "https://sattelink.s3.amazonaws.com/Attitude-sensors.png",
        price: "$2,400"
    },
    {
        name: "Cameras & Payloads",
        image_url: "https://sattelink.s3.amazonaws.com/Cameras-&-Payloads.png",
        price: "$2,400"
    },
    {
        name: "Command & Data Handling",
        image_url: "https://sattelink.s3.amazonaws.com/Command-&-Data-Handling.png",
        price: "$16,500"
    },
    {
        name: "Communication Systems",
        image_url: "https://sattelink.s3.amazonaws.com/Communication-Systems.png",
        price: "$6,600"
    },
    {
        name: "CubeSat Kits & Buses",
        image_url: "https://sattelink.s3.amazonaws.com/CubeSat-Kits-&-Buses.png",
        price: "$59,850"
    },
    {
        name: "CubeSat Structures",
        image_url: "https://sattelink.s3.amazonaws.com/CubeSat-Structures.png",
        price: "$2,950"
    },
    {
        name: "Ground Stations",
        image_url: "https://sattelink.s3.amazonaws.com/Ground-Stations.png",
        price: "$14,500"
    },
    {
        name: "Launch Adapters",
        image_url: "https://sattelink.s3.amazonaws.com/Launch-Adapters.png",
        price: "$2,950"
    }                
])