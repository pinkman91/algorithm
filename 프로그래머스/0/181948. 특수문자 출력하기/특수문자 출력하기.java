import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        
        StringBuilder str = new StringBuilder();
       
        str.append((char)33); // '!'
        str.append((char)64); // '@'
        str.append((char)35); // '#'
        str.append((char)36); // '$'
        str.append((char)37); // '%'
        str.append((char)94); // '^'
        str.append((char)38); // '&'
        str.append((char)42); // '*'
        str.append((char)40); // '('
        str.append((char)92); // '\'
        str.append((char)39); // '''
        str.append((char)34); // '"'
        str.append((char)60); // '<'
        str.append((char)62); // '>'
        str.append((char)63); // '?'
        str.append((char)58); // ':'
        str.append((char)59); // ';'

        System.out.println(str.toString());
            
    }
}