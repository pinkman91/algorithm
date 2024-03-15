import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        StringBuilder str = new StringBuilder();
        for(int i =0; i<a.length(); i++){
            if((int) a.charAt(i) < 90){
                str.append(String.valueOf(a.charAt(i)).toLowerCase());
            } else {
                str.append(String.valueOf(a.charAt(i)).toUpperCase());
            }
        }
        System.out.println(str);
    }
}