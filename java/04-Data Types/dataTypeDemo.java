
public class dataTypeDemo {

    public static void main(String[] args) {

        boolean myBoolean = true;
        char myChar = 'A';
        byte myByte = 100;
        short myShort = 10000;
        int myInt = 100000;
        long myLong = 10000000000L;
        float myFloat = 3.14f;
        double myDouble = 3.141592653589793;

        // Print the values of the variables
        System.out.println("Boolean value: " + myBoolean);
        System.out.println("Character value: " + myChar);
        System.out.println("Byte value: " + myByte);
        System.out.println("Short value: " + myShort);
        System.out.println("Integer value: " + myInt);
        System.out.println("Long value: " + myLong);
        System.out.println("Float value: " + myFloat);
        System.out.println("Double value: " + myDouble);

        // non-primitive data types
        String myString = "Hello, World!";
        Object myObject = new Object();
        int [] myArray = {1, 2, 3, 4, 5};
        class MyClass {
            int value;
            MyClass(int value) {
                this.value = value;
            }
        }

        // Create an instance of MyClass
        MyClass myClassInstance = new MyClass(10);

        // Print the values of the variables
        System.out.println("String value: " + myString);
        System.out.println("Object value: " + myObject);
        System.out.println("Array value: " + java.util.Arrays.toString(myArray));
        System.out.println("Class value: " + myClassInstance.value);
    }
}