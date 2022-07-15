import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base/base.component';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent extends BaseComponent implements OnInit {
  public dataSet=[{"title": "Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản)",
   "description": "Bụt có cái hiểu rất khác về cuộc đời. Ngài hiểu rằng sống và chết chỉ là những ý niệm không có thực. Coi đó là sự thực, chính là nguyên do gây cho chúng ta khổ não. Bụt dạy không có sinh, không có diệt, không tới cũng không đi, không giống nhau cũng không khác nhau, không có cái ngã thường hằng cũng không có hư vô. Chúng ta thì coi là Có hết mọi thứ. Khi chúng ta hiểu rằng mình không bị hủy diệt thì chúng ta không còn lo sợ. Đó là sự giải thoát. Chúng ta có thể an hưởng và thưởng thức đời sống một cách mới mẻ..Không diệt Không sinh Đừng sợ hãi là tựa sách được Thiền sư Thích Nhất Hạnh viết nên dựa trên kinh nghiệm của chính mình. Ở đó, Thầy Nhất Hạnh đã đưa ra một thay thế đáng ngạc nhiên cho hai triết lý trái ngược nhau về vĩnh cửu và hư không: “Tự muôn đời tôi vẫn tự do. Tử sinh chỉ là cửa ngõ ra vào, tử sinh là trò chơi cút bắt. Tôi chưa bao giờ từng sinh cũng chưa bao giờ từng diệt” và “Nỗi khổ lớn nhất của chúng ta là ý niệm về đến-đi, lui-tới.”.Được lặp đi lặp lại nhiều lần, Thầy khuyên chúng ta thực tập nhìn sâu để chúng ta hiểu được và tự mình nếm được sự tự do của con đường chính giữa, không bị kẹt vào cả hai ý niệm của vĩnh cửu và hư không. Là một thi sĩ nên khi giải thích về các sự trái ngược trong đời sống, Thầy đã nhẹ nhàng vén bức màn vô minh ảo tưởng dùm chúng ta, cho phép chúng ta (có lẽ lần đầu tiên trong đời) được biết rằng sự kinh hoàng về cái chết chỉ có nguyên nhân là các ý niệm và hiểu biết sai lầm của chính mình mà thôi..Tri kiến về sống, chết của Thầy vô cùng vi tế và đẹp đẽ. Cũng như những điều vi tế, đẹp đẽ khác, cách thưởng thức hay nhất là thiền quán trong thinh lặng. Lòng nhân hậu và từ bi phát xuất từ suối nguồn thâm tuệ của Thiền sư Thích Nhất Hạnh là một loại thuốc chữa lành những vết thương trong trái tim chúng ta.",
   "price": 58500,
   "author": "Thích Nhất Hạnh",

   "publisher": "Saigon Books",
    "pages": 224, "category": "Sách Tôn Giáo - Tâm Linh",
    "file_urls": ["https://salt.tikicdn.com/cache/400x400/ts/product/30/ba/e6/942b39c7efcd67f883d874e405cad236.jpg"],
   "files": "full/319b9fef097fe286b2e841cd027445e79e1523a9.jpg"},
{"title": "Muôn Kiếp Nhân Sinh (Many Lives - Many Times)", "description": "“Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn tâm giao lâu năm, ông Thomas – một nhà kinh doanh tài chính nổi tiếng ở New York. Những câu chuyện chưa từng tiết lộ này sẽ giúp mọi người trên thế giới chiêm nghiệm, khám phá các quy luật về luật Nhân quả và Luân hồi của vũ trụ giữa lúc trái đất đang gặp nhiều tai ương, biến động, khủng hoảng từng ngày..“Muôn kiếp nhân sinh” là một bức tranh lớn với vô vàn mảnh ghép cuộc đời, là một cuốn phim đồ sộ, sống động về những kiếp sống huyền bí, trải dài từ nền văn minh Atlantis hùng mạnh đến vương quốc Ai Cập cổ đại của các Pharaoh quyền uy, đến Hợp Chủng Quốc Hoa Kỳ ngày nay..“Muôn kiếp nhân sinh” cung cấp cho bạn đọc kiến thức mới mẻ, vô tận của nhân loại lần đầu được hé mở, cùng những phân tích uyên bác, tiên đoán bất ngờ về hiện tại và tương lai thế giới của những bậc hiền triết thông thái. Đời người tưởng chừng rất dài nhưng lại trôi qua rất nhanh, sinh vượng suy tử, mong manh như sóng nước. Luật nhân quả cực kỳ chính xác, chi tiết, phức tạp được thu thập qua nhiều đời, nhiều kiếp, liên hệ tương hỗ đan xen chặt chữ lẫn nhau, không ai có thể tính được tích đức này có thể trừ được nghiệp kia không, không ai có thể biết được khi nào nhân sẽ trổ quả. Nhưng, một khi đã gây ra nhân thì chắc chắn sẽ gặt quả - luật Nhân quả của vũ trụ trước giờ không bao giờ sai..Luật Luân hồi và Nhân quả đã tạo nhân duyên để người này gặp người kia. Gặp nhau có khi là duyên, có khi là nợ; gặp nhau có lúc để trả nợ, có lúc để nối lại duyên xưa. Có biết bao việc diễn ra trong đời, tưởng chừng như là ngẫu nhiên nhưng thật ra đã được sắp đặt từ trước. Luân hồi là một ngôi trường rộng lớn, nơi tất cả con người, tất cả sinh vật đều phải học bài học của riêng mình cho đến khi thật hoàn thiện mới thôi. Nếu không chịu học hay chưa học được trọn vẹn thì buộc phải học lại, chính xác theo quy luật của Nhân quả..Thomas đã chia sẻ vì sao đã kể những câu chuyện riêng tư huyền bí này với Giáo sư John Vũ để thực hiện tác phẩm “Muôn kiếp nhân sinh”:.Nhân quả đừng đợi thấy mới tin. .Nhân quả là bảng chỉ đường, giúp con người tìm về thiện lương“.“Muôn kiếp nhân sinh” có hai khổ, bìa mềm khổ 14cmx 20.5cm, bìa cứng khổ 16x24cm ruột giấy Ford kem Nhật Bản 80 gsm, in 3 màu kèm 16 phụ bản màu. Cuốn sách được xuất bản bằng tiếng Việt trước khi được chuyển nhượng bản quyền cho các quốc gia khác trên thế giới.",
"price": 122640,
"author": "Nguyên Phong",
"publisher": "First News - Trí Việt",
 "pages": 408, "category": "Sách Tôn Giáo - Tâm Linh",
 "file_urls": ["https://salt.tikicdn.com/cache/400x400/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg"],
  "files": "full/ca01cae24958b507b6043ec4aca54c122a8422b4.jpg"},
{"title": "Đường Xưa Mây Trắng (Tái Bản Lần 11) (Bìa Mềm)", "description": "Sách Đường Xưa Mây Trắng đã được dịch ra hơn 20 thứ tiếng, được tái bản nhiều lần ở các nước và được xếp vào hàng những quyển sách hay nhất của thế kỷ 20. - (Làng Mai).Tôi đã viết những chương của Đường Xưa Mây Trắng với rất nhiều hạnh phúc. Thỉnh thoảng tôi đứng dậy pha trà để uống. Mỗi ngày viết mấy giờ cũng như được ngồi uống trà với Đức Thế Tôn. Và tôi biết trước người đọc sẽ rất có hạnh phúc vì khi viết, mình cũng đang có rất nhiều hạnh phúc. Viết Đường Xưa Mây Trắng không phải là một lao động mệt nhọc mà là cả một niềm vui lớn. Đó là một quá trình khám phá..Có những đoạn tôi cho là khó viết, như đoạn Bụt độ ba anh em ông Ca Diếp. Tài liệu thường nói là Bụt độ ba anh em đó nhờ thần thông của Ngài nhưng khi viết thì tôi đã không để cho Bụt dùng thần thông mà cứ để Bụt sử dụng từ bi và trí tuệ của Ngài để độ ba ông ấy. Bụt có rất nhiều trí tuệ, rất nhiều từ bi, tại sao Bụt không dùng mà lại phải dùng thần thông? Và tôi có một niềm tin rất vững chãi là mình sẽ viết được chương đó. Chương này là một trong những chương khó nhất của Đường Xưa Mây Trắng nhưng cuối cùng tôi đã thành công..Cái chương khó thứ hai là chương nói về cuộc trở về của Bụt để thăm gia đình. Mình đã thành Phật rồi, mình đã thành bậc toàn giác rồi, nhưng về thăm gia đình mình vẫn còn là một đứa con của cha, của mẹ, vẫn là một người anh của em. Viết như thế nào để Bụt vẫn còn giữ lại được tính người của Ngài. Cũng nhờ niềm tin đó mà tôi thành công..Quý vị đọc lại, sẽ thấy Bụt về thăm nhà rất tự nhiên. Cách Ngài nắm tay vua cha đi từ ngoài vào, cách Ngài đối xử với em gái, cách Ngài đối xử với Yasodhara và Rahula, rất tự nhiên. Tôi có cảm tưởng là có chư Tổ gia hộ nên tôi mới viết như vậy được. Trong Đường Xưa Mây Trắng chúng ta khám phá ra Bụt là một con người chứ không phải là một vị thần linh. Đó là chủ tâm của tác giả, giúp cho người ta khám phá lại Bụt như một con người và lột ra hết các vòng hào quang thần dị người ta đã choàng lên cho Bụt. Không thấy Bụt như một con người thì người ta sẽ tới với Bụt rất khó.", "price": 224000, "author": "Thích Nhất Hạnh", "publisher": "Phương Nam Book", "pages": 713, "category": "Sách Tôn Giáo - Tâm Linh", "file_urls": ["https://salt.tikicdn.com/cache/400x400/ts/product/7f/83/b8/8f6c14b534a2b37818ac052da2e897c1.jpg"], "files": "full/766bfc3f63849582d82d2c4d9a990424540203c0.jpg"},
]
  constructor() {
    super()
   }

 public override postInit(): void {

 }
}
