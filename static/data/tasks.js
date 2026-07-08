window.DEXVERSE_TASKS = {
  "tasks": [
    {
      "category": "Primitive",
      "taskName": "PickCube",
      "description": "Pick up a primitive cube from the tabletop.",
      "successCondition": "The cube is lifted from the table."
    },
    {
      "category": "Primitive",
      "taskName": "StackCube",
      "description": "Pick and place one primitive cube on top of another.",
      "successCondition": "The moving cube is centered on the base cube and remains stable."
    },
    {
      "category": "Primitive",
      "taskName": "RelocateSphere",
      "description": "Move a sphere from its initial tabletop position to a randomized target.",
      "successCondition": "The sphere reaches the target position."
    },
    {
      "category": "Primitive",
      "taskName": "PickUpStick",
      "description": "Grasp a stick on the tabletop and lift it while maintaining an upright orientation.",
      "successCondition": "The stick is lifted at least 0.20 m above its reset height and stays within 30° of vertical."
    },
    {
      "category": "Articulation",
      "taskName": "OpenCabinet",
      "description": "Open a cabinet door with a bolted single-joint articulation.",
      "successCondition": "The cabinet door reaches the target open state."
    },
    {
      "category": "Primitive",
      "taskName": "RelocateObject",
      "description": "Pick a YCB rigid object and place it at a goal pose.",
      "successCondition": "The object reaches the target pose."
    },
    {
      "category": "Primitive",
      "taskName": "GraspTwoItems",
      "description": "Pick up two YCB rigid objects within one episode.",
      "successCondition": "Both target objects are grasped and lifted."
    },
    {
      "category": "Articulation",
      "taskName": "OpenDoor",
      "description": "Open a tabletop door with a revolute joint.",
      "successCondition": "The door joint passes the target open threshold."
    },
    {
      "category": "Articulation",
      "taskName": "OpenDrawer",
      "description": "Pull a tabletop drawer outward along its prismatic joint.",
      "successCondition": "The drawer joint passes the target open threshold."
    },
    {
      "category": "Articulation",
      "taskName": "OpenMicrowave",
      "description": "Open a microwave door around its hinge.",
      "successCondition": "The microwave door reaches the target open state."
    },
    {
      "category": "Primitive",
      "taskName": "OpenFaucet",
      "description": "Turn a faucet handle from its initial pose toward the target turned state.",
      "successCondition": "A faucet handle reaches the target turned state."
    },
    {
      "category": "Articulation",
      "taskName": "RotateKnob",
      "description": "Rotate a knob to a target angle.",
      "successCondition": "The knob reaches the target rotation."
    },
    {
      "category": "Primitive",
      "taskName": "PushButton",
      "description": "Press a button along its prismatic joint.",
      "successCondition": "The button reaches the pressed state."
    },
    {
      "category": "Primitive",
      "taskName": "TurnOnSwitch",
      "description": "Flip a switch from the off state to the on position.",
      "successCondition": "The switch reaches the on state."
    },
    {
      "category": "Functional",
      "taskName": "FunctionalHammerStrike",
      "description": "Grasp a hammer by its handle and drive a nail into a board.",
      "successCondition": "The nail is driven in while fingertip contacts avoid forbidden target zones."
    },
    {
      "category": "Functional",
      "taskName": "FunctionalDrillApply",
      "description": "Grasp a power drill and place its bit on a target spot with aligned axes.",
      "successCondition": "The drill bit reaches the target with valid alignment and safe fingertip placement."
    },
    {
      "category": "Functional",
      "taskName": "FunctionalPourCan",
      "description": "Grasp a tomato-soup can and pour into a bowl.",
      "successCondition": "The can is lifted into a pouring pose without invalid contact."
    },
    {
      "category": "Functional",
      "taskName": "FunctionalPourMug",
      "description": "Grasp a mug and pour into a target container.",
      "successCondition": "The mug is lifted into a pouring pose without grasping the rim."
    },
    {
      "category": "Functional",
      "taskName": "PourWineGlass",
      "description": "Grasp a wineglass, lift it, and tilt it past the pouring threshold.",
      "successCondition": "The wineglass is lifted and tilted with the opening directed downward."
    },
    {
      "category": "Functional",
      "taskName": "GraspKettle",
      "description": "Grasp a kettle by its handle and pour over a mug.",
      "successCondition": "The kettle is lifted into a pouring pose without grasping the spout."
    },
    {
      "category": "Functional",
      "taskName": "GraspPan",
      "description": "Grasp a pan by its handle and place it flat on a stove burner.",
      "successCondition": "The pan reaches the target flat pose without grasping the cooking surface."
    },
    {
      "category": "Functional",
      "taskName": "GraspBleach",
      "description": "Grasp a bleach bottle with affordance-aware contact.",
      "successCondition": "The bottle is lifted into a pouring pose without grasping the nozzle."
    },
    {
      "category": "Functional",
      "taskName": "GraspCup",
      "description": "Grasp a cup while avoiding the rim.",
      "successCondition": "The cup is lifted into a pouring pose without grasping the rim."
    },
    {
      "category": "Functional",
      "taskName": "RetrieveCup",
      "description": "Remove a cup from a rack and place it upright at the commanded goal.",
      "successCondition": "The cup comes within 0.04 m of the goal on the table and stays within 15° of upright."
    },
    {
      "category": "Articulation",
      "taskName": "GraspBucket",
      "description": "Grasp a bucket by its articulated handle.",
      "successCondition": "The bucket handle reaches the target grasp or raised state."
    },
    {
      "category": "Functional",
      "taskName": "LiftBucket",
      "description": "Lift a bucket off the table using its handle.",
      "successCondition": "The bucket is lifted from the tabletop."
    },
    {
      "category": "Articulation",
      "taskName": "GraspPot",
      "description": "Grasp a pot via its handle affordance.",
      "successCondition": "The pot is manipulated using the intended handle affordance."
    },
    {
      "category": "Articulation",
      "taskName": "LiftLid",
      "description": "Lift a lid off a container.",
      "successCondition": "The lid reaches the target open or lifted state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenLaptop",
      "description": "Hold a laptop base and open its lid around the hinge.",
      "successCondition": "The laptop lid reaches the target open state."
    },
    {
      "category": "Articulation",
      "taskName": "SqueezeScissors",
      "description": "Hold and squeeze a pair of scissors to actuate the hinge.",
      "successCondition": "The scissor hinge reaches the target state."
    },
    {
      "category": "Articulation",
      "taskName": "SlideUtilityKnife",
      "description": "Hold a utility knife body and slide its blade out from the handle.",
      "successCondition": "The blade extends while the knife body remains controlled."
    },
    {
      "category": "Articulation",
      "taskName": "LiftBasketHandle",
      "description": "Stabilize a shopping basket and raise one of its handles.",
      "successCondition": "A basket handle reaches the target raised state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenStapler",
      "description": "Hold a stapler body and open its upper arm around the hinge.",
      "successCondition": "The stapler top arm reaches the target open state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenFlatFolder",
      "description": "Hold a flat folder and open its top flap around the hinge.",
      "successCondition": "The folder flap reaches the target open state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenGlasses",
      "description": "Hold a pair of glasses and unfold the temple arms.",
      "successCondition": "Both temples reach the target open state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenPhone",
      "description": "Open a folding-phone hinge while stabilizing the phone body.",
      "successCondition": "The phone hinges reach the open state while the phone is controlled."
    },
    {
      "category": "Articulation",
      "taskName": "UnscrewCap",
      "description": "Hold a centrifuge tube and unscrew its cap.",
      "successCondition": "The cap reaches the target unscrewed state."
    },
    {
      "category": "Articulation",
      "taskName": "OpenDoubleDoor",
      "description": "Open both target cabinet doors in a coordinated manner.",
      "successCondition": "Both doors reach at least 80% of their full swing range at the same time."
    },
    {
      "category": "Non-prehensile",
      "taskName": "PushT",
      "description": "Push a T-shaped block to a target pose.",
      "successCondition": "The T-shaped object overlaps the target pose."
    },
    {
      "category": "Non-prehensile",
      "taskName": "PushSphereUpSlope",
      "description": "Push a large sphere up a tabletop slope.",
      "successCondition": "The sphere reaches the goal region."
    },
    {
      "category": "Non-prehensile",
      "taskName": "PushSmallSphereObstacleSlope",
      "description": "Push a small sphere uphill while avoiding obstacles.",
      "successCondition": "The sphere passes the target line."
    },
    {
      "category": "Contact-rich",
      "taskName": "PickFromClutter",
      "description": "Pick a designated target object from many distractor objects.",
      "successCondition": "The designated object is successfully picked from clutter."
    },
    {
      "category": "Contact-rich",
      "taskName": "PickThinObjectFromContainer",
      "description": "Extract a thin object from a small open-top container.",
      "successCondition": "The thin object reaches the extraction goal."
    },
    {
      "category": "Non-prehensile",
      "taskName": "PivotLargeCuboidAgainstWall",
      "description": "Use wall support to pivot a large thin cuboid upright.",
      "successCondition": "The cuboid reaches the target upright pose."
    },
    {
      "category": "Non-prehensile",
      "taskName": "TakeBookOffShelf",
      "description": "Pivot and extract a book from a shelf full of neighboring books.",
      "successCondition": "The book reaches the target pose."
    },
    {
      "category": "Contact-rich",
      "taskName": "InsertPeg",
      "description": "Insert a peg into a socket.",
      "successCondition": "The peg is aligned and inserted into the socket."
    },
    {
      "category": "Contact-rich",
      "taskName": "InsertPen",
      "description": "Pick up a pen, bring it vertical, and seat it in a pen holder.",
      "successCondition": "A pen tip is inserted into the holder opening."
    },
    {
      "category": "Contact-rich",
      "taskName": "InsertPipette",
      "description": "Pick up a pipette, bring it vertical, and seat its tip in a glassware flask.",
      "successCondition": "The pipette tip is inserted into the flask neck."
    },
    {
      "category": "Contact-rich",
      "taskName": "PlugCharger",
      "description": "Insert a charger plug into an outlet.",
      "successCondition": "The plug tip is aligned and inserted into the receptacle."
    },
    {
      "category": "Contact-rich",
      "taskName": "NutThread",
      "description": "Thread a nut onto a bolt.",
      "successCondition": "The nut is centered and threaded to the target depth."
    },
    {
      "category": "Contact-rich",
      "taskName": "InsertGear",
      "description": "Pick and place a gear onto the fixed gear base so that it seats into the mesh position.",
      "successCondition": "The gear's shaft point is centered on the base's shaft and seated to full depth."
    },
    {
      "category": "Bimanual",
      "taskName": "BimanualLiftBasket",
      "description": "Lift a shopping basket with both hands.",
      "successCondition": "The basket is lifted and kept level."
    },
    {
      "category": "Bimanual",
      "taskName": "BimanualLiftCarton",
      "description": "Lift a carton with both hands.",
      "successCondition": "The carton is lifted clear of the tabletop."
    },
    {
      "category": "Bimanual",
      "taskName": "BimanualLiftDutchOven",
      "description": "Lift a Dutch oven with both hands.",
      "successCondition": "The Dutch oven is lifted from the table."
    },
    {
      "category": "Bimanual",
      "taskName": "BimanualLiftTray",
      "description": "Lift a serving tray with both hands while keeping it level.",
      "successCondition": "The tray is lifted and kept level."
    },
    {
      "category": "Bimanual",
      "taskName": "BimanualHandover",
      "description": "Pass an object from one hand to the other.",
      "successCondition": "The object is transferred between hands with the required force-thresholded contact."
    },
    {
      "category": "Long-horizon",
      "taskName": "MicrowaveFood",
      "description": "Open the fridge, retrieve food, place it into the microwave, close the appliance, and turn the dial.",
      "successCondition": "The food is retrieved from the fridge and placed in the microwave, the door is closed, and the dial is turned."
    },
    {
      "category": "Long-horizon",
      "taskName": "MakeCoffee",
      "description": "Pour milk into a mug, place the mug under the coffee machine, and activate the machine switch.",
      "successCondition": "The milk is poured into the mug, the mug is placed under the coffee machine, and the switch lever is rotated."
    },
    {
      "category": "Long-horizon",
      "taskName": "OvenBakeSalmon",
      "description": "Season salmon with condiments, load it into the oven, close the oven door, and start the oven.",
      "successCondition": "The salmon is seasoned with salt and pepper, placed inside the oven, the door is closed, and the oven knob is turned."
    },
    {
      "category": "Long-horizon",
      "taskName": "CookFood",
      "description": "Pour ingredients into a pot, keep the food contained, move the pot to the stove, and turn the stove on.",
      "successCondition": "Both ingredients are poured into the pot, the pot is centered on the burner, and the stove knob is turned on."
    },
    {
      "category": "Long-horizon",
      "taskName": "CleanTable",
      "description": "Sort active objects into the drawer or trash can, then close the corresponding receptacles.",
      "successCondition": "The drawer and trash lid are closed with every assigned object contained inside."
    }
  ],
  "categorySummary": [
    {
      "category": "Primitive",
      "taxonomyTotal": 9,
      "tasksInExtractedTable": 9,
      "representativeTasks": "PickCube, StackCube, RelocateSphere, PushButton",
      "keyChallenge": "Direct interaction with simple goals and limited action complexity."
    },
    {
      "category": "Functional",
      "taxonomyTotal": 11,
      "tasksInExtractedTable": 11,
      "representativeTasks": "FunctionalHammerStrike, RetrieveCup, GraspKettle, FunctionalPourCan",
      "keyChallenge": "Affordance-aware interaction with task-relevant object regions."
    },
    {
      "category": "Articulation",
      "taxonomyTotal": 18,
      "tasksInExtractedTable": 18,
      "representativeTasks": "OpenStapler, OpenLaptop, SqueezeScissors, OpenPhone",
      "keyChallenge": "Controlling object parts and joints, under constrained motion."
    },
    {
      "category": "Non-prehensile",
      "taxonomyTotal": 5,
      "tasksInExtractedTable": 5,
      "representativeTasks": "PushT, TakeBookOffShelf, PivotLargeCuboidAgainstWall, PushSmallSphereObstacleSlope",
      "keyChallenge": "Using pushing, sliding, pivoting, or environmental contact."
    },
    {
      "category": "Contact-rich",
      "taxonomyTotal": 8,
      "tasksInExtractedTable": 8,
      "representativeTasks": "InsertPeg, PlugCharger, NutThread, InsertGear",
      "keyChallenge": "Precise alignment under sustained contact and tight constraints."
    },
    {
      "category": "Bimanual",
      "taxonomyTotal": 5,
      "tasksInExtractedTable": 5,
      "representativeTasks": "BimanualLiftTray, BimanualLiftCarton, BimanualHandover",
      "keyChallenge": "Coordinated stabilization, transfer, or cooperative manipulation."
    },
    {
      "category": "Long-horizon",
      "taxonomyTotal": 5,
      "tasksInExtractedTable": 5,
      "representativeTasks": "MakeCoffee, MicrowaveFood, CookFood, CleanTable",
      "keyChallenge": "Completing temporally extended multi-stage procedures."
    }
  ]
};
