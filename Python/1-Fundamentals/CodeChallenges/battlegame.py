wizard = "Wizard"
elf = "Elf"
human = "Human"
fairy = "Fairy"


Wizard_hp = 70
elf_hp = 70
human_hp= 150
fairy_hp= 1000



wizard_damage = 150
elf_damage = 100
human_damage = 50
fairy_damage = 200

dragon_damage = 25
dragon_hp = 400


while True:
   print("1) " + wizard)
   print("2) " + elf)
   print("3) " + human)
   print("4) " + fairy)
   choice = input("Choose your player")
   if choice =="1":
      character = wizard
      my_hp = Wizard_hp
      my_damage = wizard_damage
      break
   if choice =="2":
      character = elf
      my_hp = elf_hp
      my_damage = elf_damage
      break
   if choice =="3":
      character = human
      my_hp = human_hp
      my_damage = human_damage
      break
   if choice =="4":
      character = fairy
      my_hp = fairy_hp
      my_damage = fairy_damage
      break
   else:
      print("Unknown character")
      print("you have chosen unknown character:", )
      print ("health:", my_hp)
      print ("Damage:", my_damage)
      while True:
         dragon_hp -= my_damage
         print('The ", character,' " damage the Dragon!")
         if dragon_hp <= 0:
            print("The Dragon has lost the battle!")
            break
         my_hp-= dragon_damage
         print("The Dragon damage the:,character")
