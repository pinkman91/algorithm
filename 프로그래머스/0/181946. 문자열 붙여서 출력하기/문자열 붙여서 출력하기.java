import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
       
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();

        StringBuilder text = new StringBuilder();
        
        text.append(a);
        text.append(b);
        
        System.out.println(text);
    }
}