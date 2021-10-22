public class atbashCipher{
    public static void main(String[] args) {
        System.out.println(atbash("Hello World!"));
        System.out.println("Hello World!");
    }
    public static String atbash(String toEncrypt) {
        String output = "";
        for(char c: toEncrypt.toCharArray()){
            if(Character.isLetter(c)){
                int newChar = ('Z' - c) + 'A';
                output = output + (char) newChar;
            }else{
                output = output + c;
            }
            
        }
        return output;
    }
}